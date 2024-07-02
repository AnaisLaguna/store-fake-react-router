export default function PageSection({ children }) {
    return (
      <section className="w-full p-4 flex justify-center items-center">
        <div className="w-full max-w-screen-xl">{children}</div>
      </section>
    );
  }
  