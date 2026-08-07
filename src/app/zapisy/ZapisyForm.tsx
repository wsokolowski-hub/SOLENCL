'use client';

import React, { useState } from 'react';

const kursy = [
  'Pływanie niemowląt i dzieci do lat 4',
  'Nauka pływania dla dzieci od podstaw',
  'Doskonalenie pływania dla dzieci',
  'Zajęcia indywidualne',
  'Nie wiem — proszę o pomoc w doborze',
];
const wiek = [
  '6 miesięcy – 1 rok', '1 rok', '2 lata', '3 lata', '4 lata',
  '5 lat', '6 lat', '7 lat', '8 lat', '9 lat', '10 lat',
];

interface Props {
  web3formsKey: string;
  phoneHuman: string;
}

export default function ZapisyForm({ web3formsKey, phoneHuman }: Props) {
  const hasKey = !!web3formsKey;
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ kind: '' | 'ok' | 'err'; text: string }>({ kind: '', text: '' });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Brak klucza Web3Forms — formularz nie wyśle, więc kieruj na telefon.
    if (!hasKey) {
      setStatus({
        kind: 'err',
        text: `Formularz wysyłkowy nie jest jeszcze skonfigurowany. Zadzwoń: ${phoneHuman}`,
      });
      return;
    }

    setSending(true);
    setStatus({ kind: '', text: '' });
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ kind: 'ok', text: 'Dziękujemy! Zgłoszenie wysłane — oddzwonimy najszybciej jak to możliwe.' });
        form.reset();
      } else {
        throw new Error(data.message || 'error');
      }
    } catch {
      setStatus({ kind: 'err', text: `Coś poszło nie tak. Zadzwoń: ${phoneHuman} lub spróbuj ponownie.` });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="zap-formularz" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value={web3formsKey} />
      <input type="hidden" name="subject" value="Nowy zapis (oddzwonimy) — Solen Swim" />
      <input type="hidden" name="from_name" value="Formularz zapisowy Solen Swim" />
      <input type="checkbox" name="botcheck" className="zap-hp" tabIndex={-1} autoComplete="off" />

      <label className="zap-pole">
        <span>
          Telefon <i>*</i>
        </span>
        <input type="tel" name="Telefon" required inputMode="tel" placeholder="np. 600 100 200" />
      </label>

      <label className="zap-pole">
        <span>
          E-mail <i>*</i>
        </span>
        <input type="email" name="E-mail" required placeholder="twoj@email.pl" />
      </label>

      <label className="zap-pole">
        <span>
          Imię dziecka <i>*</i>
        </span>
        <input type="text" name="Imię dziecka" required />
      </label>

      <label className="zap-pole">
        <span>
          Nazwisko dziecka <i>*</i>
        </span>
        <input type="text" name="Nazwisko dziecka" required />
      </label>

      <label className="zap-pole">
        <span>
          Wybór kursu <i>*</i>
        </span>
        <select name="Wybór kursu" required defaultValue="">
          <option value="" disabled>
            — wybierz kurs —
          </option>
          {kursy.map((k) => (
            <option value={k} key={k}>
              {k}
            </option>
          ))}
        </select>
      </label>

      <label className="zap-pole">
        <span>
          Wiek dziecka <i>*</i>
        </span>
        <select name="Wiek dziecka" required defaultValue="">
          <option value="" disabled>
            — wybierz wiek —
          </option>
          {wiek.map((w) => (
            <option value={w} key={w}>
              {w}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="zap-submit" disabled={sending}>
        {sending ? 'Wysyłanie…' : 'Prześlij'}
      </button>
      <p className={`zap-form-status${status.kind ? ` ${status.kind}` : ''}`} id="zap-status" role="status" aria-live="polite">
        {status.text}
      </p>
    </form>
  );
}
