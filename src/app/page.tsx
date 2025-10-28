// hero.tsx
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero = ({ title, subtitle, imageSrc, imageAlt }: HeroProps) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6 space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="flex flex-1 justify-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-primary-600">
              {title}
            </h1>
            <p className="mt-4 text-gray-600 text-2xl lg:text-3xl">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="flex-1">
          <Image
            width={500}
            height={500}
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// features.tsx
interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-200">
        <i className={`${icon} text-3xl text-primary-600`} />
      </div>
      <h3 className="font-bold text-xl leading-tight text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      title: 'Easy to Use',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-cogs',
    },
    {
      title: 'Secure & Private',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-lock',
    },
    {
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'fas fa-headset',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-gray-600">
        <h1 className="text-4xl font-bold text-center leading-tight text-primary-600 mb-12">
          Features
        </h1>
        <div className="flex flex-wrap">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col flex-grow flex-shrink"
            >
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

// testimonials.tsx
interface TestimonialProps {
  author: string;
  quote: string;
}

const Testimonial = ({ author, quote }: TestimonialProps) => {
  return (
    <div className="text-center mb-12">
      <p className="text-gray-600 text-base leading-relaxed mb-6">
        "{quote}"
      </p>
      <p className="text-gray-800 text-xl font-medium leading-tight">
        {author}
      </p>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      author: 'John Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      author: 'Jane Doe',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-gray-600">
        <h1 className="text-4xl font-bold text-center leading-tight text-primary-600 mb-12">
          Testimonials
        </h1>
        <div className="flex flex-wrap">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// pricing.tsx
interface PriceProps {
  name: string;
  price: string;
  features: string[];
}

const Price = ({ name, price, features }: PriceProps) => {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <div className="border-2 rounded-xl border-primary-200 py-6 px-4">
        <h2 className="text-xl font-bold text-center leading-tight text-gray-800 mb-4">
          {name}
        </h2>
        <div className="text-center mb-6">
          <span className="text-5xl font-bold leading-none text-primary-600">
            ${price}
          </span>
          <span className="text-xl leading-none text-gray-600">/mo</span>
        </div>
        <ul className="list-inside list-disc text-gray-600">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricesData = [
    {
      name: 'Basic',
      price: '19',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ],
    },
    {
      name: 'Premium',
      price: '49',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
      ],
    },
    {
      name: 'Enterprise',
      price: '99',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
        'Feature 7',
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-gray-600">
        <h1 className="text-4xl font-bold text-center leading-tight text-primary-600 mb-12">
          Pricing
        </h1>
        <div className="flex flex-wrap">
          {pricesData.map((price, index) => (
            <Price key={index} {...price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

// cta.tsx
interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTA = ({ title, subtitle, buttonText, buttonLink }: CTAProps) => {
  return (
    <section className="bg-primary-600 py-16">
      <div className="container mx-auto px-6 text-gray-100">
        <h1 className="text-4xl font-bold text-center leading-tight text-gray-100 mb-12">
          {title}
        </h1>
        <p className="text-gray-300 text-2xl text-center leading-relaxed mb-10">
          {subtitle}
        </p>
        <div className="text-center">
          <a
            href={buttonLink}
            className="bg-white text-primary-600 font-bold rounded-full py-4 px-8 shadow-lg hover:bg-gray-100 hover:text-primary-700 transition duration-500"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;