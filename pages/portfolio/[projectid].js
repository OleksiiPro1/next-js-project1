import { useRouter } from 'next/router';

export default function Project() {
  const router = useRouter();

  // console.log(router.pathname);
  // console.log(router.query);

  return (
    <div>
      <h1>Project</h1>
    </div>
  );
}
