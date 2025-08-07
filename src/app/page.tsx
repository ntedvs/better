import { ReceiptText, Star, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex h-[100vh] items-center">
        <div className="mt-20 flex w-full flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h1 className="mb-6 text-5xl font-bold">
              fresh food<span className="text-primary">.</span> chef made
              <span className="text-primary">.</span>
            </h1>

            <p className="max-w-[35rem] text-lg">
              Better brings chef-driven cuisine to Chincoteague, Virginia. Our
              food truck specializes in seasonal, fresh ingredients crafted into
              exceptional meals that celebrate local flavors.
            </p>
          </div>

          <div className="flex gap-6">
            <Link
              href="https://app.getyomojo.com/order?vendor=OTfBfKmkD7"
              target="_blank"
              className="flex items-center gap-2 rounded-full border-2 px-8 py-4 whitespace-nowrap"
            >
              <ReceiptText className="size-5" />
              Order Online
            </Link>

            <Link
              href="/menu"
              className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 whitespace-nowrap text-white"
            >
              <Utensils className="size-5" />
              View Menu
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[100vh]">
        <h2 id="about" className="text-center text-4xl font-semibold">
          Meet the Team
        </h2>
        <p className="mx-auto mt-4 mb-12 max-w-3xl text-center text-foreground/80">
          Discover the passion and tradition behind every dish. Our
          family-driven approach combines generations of culinary wisdom with
          the freshest seasonal ingredients.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <Card
            image="chef.jpg"
            title="Our Story"
            body="Born into a family of passionate cooks, Chef Justin Kerchner learned the art of traditional cooking from her grandmother. With 15 years of culinary experience, she believes food is love made visible."
          />

          <Card
            image="family.jpg"
            title="Family Business"
            body="Three generations of the Kerchner family have poured their hearts into serving our community. We believe in creating connections through authentic flavors and warm hospitality."
          />

          <Card
            image="fresh.png"
            title="Fresh & Seasonal"
            body="We source our ingredients from local farmers and markets daily. Every dish is prepared with the finest seasonal produce, ensuring peak flavor in every bite."
          />
        </div>
      </div>

      <div className="h-[100vh]">
        <div className="mb-20 flex justify-between">
          <h2 className="text-6xl">Signature Dishes</h2>

          <div>
            <p className="mb-6 max-w-md text-foreground/80">
              Our chef-crafted favorites showcase the best of local ingredients
              and creative culinary artistry. Each dish tells a story of flavor
              and passion.
            </p>

            <Link
              href="/menu"
              className="rounded-md bg-primary px-8 py-2 text-white"
            >
              View Full Menu
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Hover
            image="club.jpg"
            title="Turkey Club"
            body="Roasted with crispy bacon, dried cranberries & balsamic glaze"
            price={14}
          />

          <Hover
            image="straw.jpg"
            title="Chocolate Strawberries"
            body="Roasted with crispy bacon, dried cranberries & balsamic glaze"
            price={16}
          />

          <Hover
            image="shrimp.jpg"
            title="Shrimp Salad"
            body="Roasted with crispy bacon, dried cranberries & balsamic glaze"
            price={12}
          />

          <Hover
            image="wrap.jpg"
            title="Chicken Wrap"
            body="Roasted with crispy bacon, dried cranberries & balsamic glaze"
            price={14}
          />
        </div>
      </div>

      <div>
        <h2 id="reviews" className="text-center text-4xl font-semibold">
          What Our Customers Say
        </h2>
        <p className="mx-auto mt-4 mb-12 max-w-3xl text-center text-foreground/80">
          Discover why our Chincoteague community has fallen in love with
          Better&apos;s fresh, creative cuisine and our warm hospitality.
        </p>

        <div className="relative">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="mt-4 space-y-4">
              <Review
                name="Sarah Mitchell"
                body="The Brussels Sprouts from Better are absolutely incredible! I never thought I'd say that about a vegetable, but Chef Mike has completely changed my mind. The crispy texture and amazing seasoning make them addictive. This food truck is redefining what street food can be!"
              />
              <Review
                name="Tony Rodriguez"
                body="Better has become the heart of our community here in Chincoteague. Chef Mike doesn't just serve food - he creates experiences. Every dish is crafted with love and you can taste the difference. The quality rivals any high-end restaurant I've been to."
              />
              <Review
                name="Nate Davis"
                body="I've been to fancy restaurants that can't touch the Clam Chowder from Better. Rich, creamy, packed with fresh clams - it tastes like the ocean in the best way possible. The portions are generous and the price is so reasonable!"
              />
            </div>

            <div className="space-y-4">
              <Review
                name="Emma Chen"
                body="Best food truck in Chincoteague, hands down! The Potato Rocket is my go-to - perfectly crispy outside, fluffy inside. Chef Mike always remembers my order and greets everyone like family."
              />
              <Review
                name="Maria Santos"
                body="Those Brussels Sprouts changed my life! My kids actually ASK for vegetables now. Chef Mike's personality is as amazing as his food - always smiling, always passionate about what he's doing."
              />
              <Review
                name="David Thompson"
                body="Fresh, local ingredients and incredible creativity. The Potato Rocket is unlike anything I've had - crispy, flavorful, and filling. Better proves that food trucks can serve restaurant-quality meals with heart and soul."
              />
            </div>

            <div className="mt-8 space-y-4">
              <Review
                name="James Wilson"
                body="Fresh, local ingredients and incredible creativity. The Potato Rocket is unlike anything I've had - crispy, flavorful, and filling. Better proves that food trucks can serve restaurant-quality meals with heart and soul."
              />
              <Review
                name="Jennifer Park"
                body="The Clam Chowder is perfection in a bowl. Creamy, rich, with chunks of fresh clam that taste like they were just pulled from the bay. Chef Mike's attention to detail shows in every spoonful."
              />
              <Review
                name="Lisa Chang"
                body="The Brussels Sprouts from Better are absolutely incredible! I never thought I'd say that about a vegetable, but Chef Mike has completely changed my mind. The crispy texture and amazing seasoning make them addictive. This food truck is redefining what street food can be!"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% to-background" />
        </div>
      </div>

      <div className="mt-20">
        <h2 id="location" className="text-center text-4xl font-semibold">
          Find Us Today
        </h2>
        <p className="mx-auto mt-4 mb-12 max-w-3xl text-center text-foreground/80">
          Fresh island eats, served from our location at 6507 Maddox Blvd,
          Chincoteague, VA
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-[#f7f5f0] p-4">
            <div
              className={
                "flex items-center justify-between rounded-md p-2 " +
                (new Date().getDay() === 1 && "bg-primary text-white")
              }
            >
              <p className="text-lg font-medium">Monday</p>
              <p>Closed</p>
            </div>
            <div
              className={
                "flex items-center justify-between rounded-md p-2 " +
                (new Date().getDay() === 2 && "bg-primary text-white")
              }
            >
              <p className="text-lg font-medium">Tuesday</p>
              <p>11AM - 7PM</p>
            </div>
            <div
              className={
                "flex items-center justify-between rounded-md p-2 " +
                (new Date().getDay() === 3 && "bg-primary text-white")
              }
            >
              <p className="text-lg font-medium">Wednesday</p>
              <p>11AM - 7PM</p>
            </div>
            <div
              className={
                "flex items-center justify-between rounded-md p-2 " +
                (new Date().getDay() === 4 && "bg-primary text-white")
              }
            >
              <p className="text-lg font-medium">Thursday</p>
              <p>Closed</p>
            </div>
            <div
              className={
                "flex items-center justify-between rounded-md p-2 " +
                (new Date().getDay() === 5 && "bg-primary text-white")
              }
            >
              <p className="text-lg font-medium">Friday</p>
              <p>11AM - 7PM</p>
            </div>
            <div
              className={
                "flex items-center justify-between rounded-md p-2 " +
                (new Date().getDay() === 6 && "bg-primary text-white")
              }
            >
              <p className="text-lg font-medium">Saturday</p>
              <p>11AM - 7PM</p>
            </div>
            <div
              className={
                "flex items-center justify-between rounded-md p-2 " +
                (new Date().getDay() === 7 && "bg-primary text-white")
              }
            >
              <p className="text-lg font-medium">Sunday</p>
              <p>11AM - 7PM</p>
            </div>
          </div>

          <div className="size-full rounded-lg bg-[#f7f5f0] p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.9749179415417!2d-75.36283432415149!3d37.93101640314452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b96984a9a222dd%3A0x2ec49d0fe693a16f!2sBetter.!5e0!3m2!1sen!2sus!4v1754547100151!5m2!1sen!2sus"
              className="size-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}

const Review = ({ name, body }: { name: string; body: string }) => {
  return (
    <div className="rounded-lg border-2 border-primary bg-[#f7f5f0] p-4">
      <div className="flex gap-1">
        <Star className="fill-primary text-primary" />
        <Star className="fill-primary text-primary" />
        <Star className="fill-primary text-primary" />
        <Star className="fill-primary text-primary" />
        <Star className="fill-primary text-primary" />
      </div>

      <p className="my-8 text-sm">&quot;{body}&quot;</p>

      <div className="flex gap-2">
        <Image
          src={`https://api.dicebear.com/9.x/micah/svg?seed=${name}`}
          alt="Avatar"
          width={40}
          height={40}
          unoptimized
        />

        <div>
          <p>{name}</p>
          <p className="text-sm text-foreground/80">Chincoteague Local</p>
        </div>
      </div>
    </div>
  )
}

const Hover = ({
  image,
  title,
  body,
  price,
}: {
  image: string
  title: string
  body: string
  price: number
}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent to-foreground/80" />

      <div className="pointer-events-none absolute z-10 flex h-full flex-col justify-end gap-2 p-4 text-white">
        <p className="text-lg">{title}</p>
        <p className="text-sm">{body}</p>
        <p className="text-xl font-semibold">${price}</p>
      </div>

      <Image
        src={`/${image}`}
        alt={""}
        width={200}
        height={200}
        className="aspect-square w-full object-cover transition hover:scale-105"
      />
    </div>
  )
}

const Card = ({
  image,
  title,
  body,
}: {
  image: string
  title: string
  body: string
}) => {
  return (
    <div className="rounded-lg bg-[#f7f5f0]">
      <Image
        src={`/${image}`}
        alt="Chef"
        width={200}
        height={200}
        className="aspect-3/2 w-full rounded-t-lg object-cover"
      />

      <div className="px-4 py-8">
        <p className="mb-2 text-lg font-semibold">{title}</p>
        <p className="text-foreground/80">{body}</p>
      </div>
    </div>
  )
}
