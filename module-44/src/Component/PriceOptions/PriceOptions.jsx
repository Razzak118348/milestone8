
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const gymPricingData = [
        {
          id: 1,
          name: "Basic Membership",
          price: "$20/month",
          features: ["Access to gym equipment", "Locker room"]
        },
        {
          id: 2,
          name: "Standard Membership",
          price: "$35/month",
          features: ["Access to gym equipment", "Locker room", "Group classes", "Swimming pool"]
        },
        {
          id: 3,
          name: "Premium Membership",
          price: "$50/month",
          features: ["Access to gym equipment", "Locker room", "Group classes", "Swimming pool", "Personal trainer sessions"]
        },
        {
          id: 4,
          name: "Family Membership",
          price: "$75/month",
          features: ["Access to gym equipment", "Locker room", "Group classes", "Swimming pool", "Kids' club"]
        },
        {
          id: 5,
          name: "Student Membership",
          price: "$15/month",
          features: ["Access to gym equipment", "Locker room", "Discounted group classes"]
        },
        {
          id: 6,
          name: "Senior Membership",
          price: "$25/month",
          features: ["Access to gym equipment", "Locker room", "Water aerobics", "Senior fitness classes"]
        },
        {
          id: 7,
          name: "Corporate Membership",
          price: "$40/month",
          features: ["Access to gym equipment", "Locker room", "Group classes", "Swimming pool", "Corporate wellness programs"]
        },
        {
          id: 8,
          name: "VIP Membership",
          price: "$100/month",
          features: ["Access to gym equipment", "Locker room", "Group classes", "Swimming pool", "Personal trainer sessions", "Spa services"]
        },
        {
          id: 9,
          name: "Weekend Warrior Membership",
          price: "$30/month",
          features: ["Access to gym equipment on weekends", "Locker room"]
        },
        {
          id: 10,
          name: "Yoga Enthusiast Membership",
          price: "$45/month",
          features: ["Access to gym equipment", "Locker room", "Unlimited yoga classes", "Meditation sessions"]
        }
      ];
    return (
        <div >
            <h2 className="text-3xl text-center font-bold mt-10"> Best Price in the Town</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-5 md:my-10 mx-5'>
            {
              gymPricingData.map(singleData => <PriceOption key={singleData.id} option={singleData}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;