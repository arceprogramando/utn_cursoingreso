import { useState, useEffect } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(randomMessage());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreeting(randomMessage());
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto">
      <div class="flex flex-col justify-center text-center ">
        <p class="text-sm text-gray-600">
          Pueden aportar o dejar sus estrellitas en{' '}
          <span>
            <a
              href="https://github.com/arceprogramando/astro-practice"
              class="underline font-bold text-blue-600 uppercase  hover:text-teal-600"
              target="_blank"
            >
              Github
            </a>
            {greeting}
          </span>
        </p>
      </div>
      <div className="text-center"></div>
    </div>
  );
}
