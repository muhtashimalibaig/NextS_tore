import Button from "@/components/Button";

const plans = [
  {
    name: "Basic",
    price: "₹499",
    features: [
      "1 Product Category",
      "Basic Support",
      "5 Product Listings",
      "Standard Delivery",
    ],
  },
  {
    name: "Pro",
    price: "₹999",
    features: [
      "5 Product Categories",
      "Priority Support",
      "50 Product Listings",
      "Fast Delivery",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹1999",
    features: [
      "Unlimited Categories",
      "24/7 Support",
      "Unlimited Listings",
      "Next-Day Delivery",
    ],
  },
];

const Pricing = () => {
  return (
    <section className='py-16 px-4'>
      <div className='max-w-7xl mx-auto text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4'>Pricing Plans</h2>
        <p>
          Choose a plan that fits your business. Simple pricing with no hidden
          fees.
        </p>
      </div>

      <div className='grid gap-8 md:grid-cols-3 max-w-6xl mx-auto'>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 rounded-xl shadow-md bg-zinc-800 border-2 ${
              plan.popular ? "border-[#ff4655] scale-105" : "border-gray-200"
            } transition-all duration-300`}>
            {plan.popular && (
              <span className='bg-[#ff4655] text-white text-xs px-3 py-1 rounded-full mb-4 inline-block'>
                Most Popular
              </span>
            )}
            <h3 className='text-2xl font-bold  mb-2'>{plan.name}</h3>
            <p className='text-3xl font-extrabold text-[#ff4655] mb-4'>
              {plan.price}
            </p>
            <ul className='space-y-2 mb-6'>
              {plan.features.map((feature, i) => (
                <li key={i} className='flex items-center justify-start gap-2'>
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <Button href='/' text='Choose Plan' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
