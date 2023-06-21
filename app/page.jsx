import Feed from '@components/Feed';

const Home = () => {
  return (
    // Creating a section in html for the title
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share

        {/* To create a gap for smaller screen (md) */}
        <br className='max-md:hidden' />

        <span className='orange_gradient text-center'> AI Powered Prompts</span>
      </h1>

      <p className='desc text-center'>
        This is a test website that's built in Next.js, an extension of React that offers features like server-side rendering and more.
      </p>

      <Feed />
    </section>

    // Here's where the feed component comes in
  )
}

export default Home;
