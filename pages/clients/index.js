import Link from 'next/link';

export default function Clients() {
  const clients = [
    { id: 'max', name: 'Maxim' },
    { id: 'alex', name: 'Alexey' },
  ];

  return (
    <div>
      <h1>Clients</h1>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* <ul>
        <li>
          <Link href="/max">Max</Link>
        </li>
        <li>
          <Link href="/alex">Alex</Link>
        </li>
      </ul> */}
    </div>
  );
}
