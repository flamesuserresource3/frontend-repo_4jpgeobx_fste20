import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/90 via-white/20 to-transparent dark:from-neutral-900/90 dark:via-neutral-900/10" />
      <div className="relative z-10 h-full w-full flex items-end p-6 sm:p-8">
        <div className="max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Share moments. Chat in real-time. Feel the vibe.
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            A minimal, elegant social platform with a playful 3D touch.
          </p>
        </div>
      </div>
    </section>
  );
}
