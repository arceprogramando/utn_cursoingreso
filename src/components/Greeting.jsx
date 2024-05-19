import { useState, useEffect } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(randomMessage());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreeting(randomMessage());
    }, 700);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto">
      <div class="flex flex-col justify-center text-center ">
        <p class="">
          Pueden aportar o dejar sus estrellitas en{' '}
          <span>
            <a
              href="https://github.com/arceprogramando/astro-practice"
              className="text-teal-400"
            >
              Github{' '}
            </a>
          </span>{' '}
        </p>
      </div>
      <div className="text-center"></div>
    </div>
  );
}
