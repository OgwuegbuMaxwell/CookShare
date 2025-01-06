import Link from "next/link";

import classes from './page.module.css'
import ImageSlideshow from "@/components/images/image-slideshow";


export default function Home() {
  return (
      <>
        <header className={classes.header}>
            <div className={classes.slideshow}>
              <ImageSlideshow/>
            </div>

            <div>
                <div className={classes.hero}>
                  <h1>CookShare: Cook. Share. Inspire.</h1>
                  <p>Share your meals, tips, and recipes with ease.</p>

                </div>
                <div className={classes.cta}>
                  <Link href="/community">Join the community</Link>
                  <Link href="/meals">Explore Meals</Link>
                </div>
            </div>
        </header>

        <main>
          <section className={classes.section}>
            <h2>How CookShare Works</h2>
            <p>
              CookShare is a vibrant platform where food lovers come together to share their favorite meals, recipes, and cooking tips. 
              It&apos;s a place to showcase your culinary creations and inspire others with your cooking skills.
            </p>
            <p>
              From browsing delicious dishes to learning new cooking techniques, CookShare is your go-to community for all things food!
            </p>
          </section>

          <section className={classes.section}>
            <h2>Why CookShare?</h2>
            <p>
              CookShare is more than just a recipe site. It&apos;s a community built for food enthusiasts who want to connect, 
              inspire, and learn from each other. Whether you&apos;re an expert chef or a curious beginner, there&apos;s something here for you.
            </p>
            <p>
              Share your meals with like-minded food lovers, discover new flavors from around the globe, and become a part of a welcoming community that celebrates the joy of cooking.
            </p>
          </section>
        </main>

      
      </>
  );
}
