https://kupaz.pl

Website for Polish e-commerce specialized in tincture making kits.

The entire site is built on next.js 14
Data is stored in MongoDB, and payments are handled through Stripe Payments.

More detailed description:

- The Shopping Cart is made with a React context provider, serving as a client-side component that displays information about cart items based on data retrieved from a database.

- Payments are handled via custom logic written based on the stripe.com/api/documentation.
Essentially, a new checkout.session created each time when a client clicks 'Pay' button in the shopping cart.

- All the data about the products is retrieved from MongoDB.

- Form validations are handled with React-Hook-Form and Zod.

- Dynamic rendering for each product and dynamic SEO description based on the data retrieved from the MongoDB. 

- Human-readable, self - healing URLS.
(Thanks to the https://mikebifulco.com/posts/self-healing-urls-nextjs-seo)

If you write the wrong url - it is not a problem:
Wrong url example: https://kupaz.pl/smaki/irisXh-2 - it will redirect you to the https://kupaz.pl/smaki/irish-2

- Filtering functionality for products
The data from the <select> dropdown is "reactive" to the url params

- Animations made with framer - motion

- Swiper.js for photos
