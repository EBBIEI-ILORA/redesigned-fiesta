import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Check, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Subscription tier configuration
export const SUBSCRIPTION_TIERS: Record<string, {
  name: string;
  subtitle: string;
  monthly_price_id: string;
  yearly_price_id: string;
  product_id: string;
  yearly_product_id: string;
  monthlyPrice: number;
  yearlyPrice: number;
  savingsPercent: number;
  popular?: boolean;
  features: string[];
}> = {
  awakening: {
    name: "Awakening",
    subtitle: "Begin your journey",
    monthly_price_id: "price_1Sa9R3GYK3AqAdEQJPjkUoQd",
    yearly_price_id: "price_1Sa9UuGYK3AqAdEQlEV45OTW",
    product_id: "prod_TXDsw93nMt5WEG",
    yearly_product_id: "prod_TXDww2GmyEsGyl",
    monthlyPrice: 37,
    yearlyPrice: 297,
    savingsPercent: 33,
    features: [
      "Connect up to 3 accounts via Plaid",
      "Dashboard with income & expense tracking",
      "Monthly financial summaries",
      "Wealth Archetype quiz + reveal",
      "1 savings goal tracker",
      "CSV transaction upload",
      "Mobile app access",
    ],
  },
  expansion: {
    name: "Expansion",
    subtitle: "Grow with intention",
    monthly_price_id: "price_1Sa9R5GYK3AqAdEQwA4gdUyt",
    yearly_price_id: "price_1Sa9UwGYK3AqAdEQnWPqbVyj",
    product_id: "prod_TXDsd1F4sESano",
    yearly_product_id: "prod_TXDwybyHjdULOs",
    monthlyPrice: 67,
    yearlyPrice: 547,
    savingsPercent: 32,
    popular: true,
    features: [
      "Everything in Awakening, plus:",
      "Unlimited account connections",
      "Multiple goals with milestone celebrations",
      "AI Wealth Advisor — monthly insights",
      "Spending analysis by category",
      "Reserves builder with recommendations",
      "Year-over-year comparisons",
      "1 Business Goal Tracker",
      "Priority support",
    ],
  },
  embodiment: {
    name: "Embodiment",
    subtitle: "Command your legacy",
    monthly_price_id: "price_1Sa9R8GYK3AqAdEQOddC4XVs",
    yearly_price_id: "price_1Sa9UyGYK3AqAdEQykkp7x9R",
    product_id: "prod_TXDs6rKINhhEHJ",
    yearly_product_id: "prod_TXDw9TJrRD2Wse",
    monthlyPrice: 127,
    yearlyPrice: 997,
    savingsPercent: 35,
    features: [
      "Everything in Expansion, plus:",
      "Portfolio & investment tracking",
      "AI Advisor — weekly insights",
      "Unlimited Business Goal Trackers",
      "Allocation recommendations",
      "Quarterly wealth check-ins",
      "Stripe + booking integration",
      "Early access to new features",
      "Founding member badge",
    ],
  },
};

const Pricing = () => {
  const { user, subscription } = useAuth();
  const navigate = useNavigate();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);
  const [isYearly, setIsYearly] = useState(false);

  const handleSubscribe = async (tierKey: string) => {
    if (!user) {
      navigate("/auth");
      return;
    }

    const tier = SUBSCRIPTION_TIERS[tierKey];
    const priceId = isYearly ? tier.yearly_price_id : tier.monthly_price_id;
    setLoadingTier(tierKey);

    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { priceId },
      });

      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to start checkout",
        variant: "destructive",
      });
    } finally {
      setLoadingTier(null);
    }
  };

  const handleManageSubscription = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (error: any) {
      console.error("Portal error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to open subscription management",
        variant: "destructive",
      });
    }
  };

  const getCurrentTierKey = () => {
    if (!subscription?.product_id) return null;
    return Object.entries(SUBSCRIPTION_TIERS).find(
      ([_, tier]) => tier.product_id === subscription.product_id || tier.yearly_product_id === subscription.product_id
    )?.[0];
  };

  const currentTierKey = getCurrentTierKey();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-warm to-cream py-12 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-5 py-3 bg-transparent border border-stone text-slate font-jost text-sm tracking-wider hover:border-hydrangea-deep hover:text-hydrangea-deep transition-all duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-hydrangea-deep mb-4">
            Pricing
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light text-iron tracking-tight mb-4">
            Choose your <em className="italic text-hydrangea-deep">path</em>
          </h1>
          <p className="font-jost text-lg text-slate max-w-[600px] mx-auto leading-relaxed font-light">
            Select the tier that aligns with your wealth-building journey. 
            All plans include a 14-day clarity guarantee.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`font-jost text-sm transition-colors duration-300 ${!isYearly ? "text-iron font-medium" : "text-taupe"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-[52px] h-7 rounded-full transition-colors duration-300 ${
              isYearly ? "bg-hydrangea-deep" : "bg-stone"
            }`}
          >
            <span
              className={`absolute top-[3px] left-[3px] w-[22px] h-[22px] bg-white rounded-full transition-transform duration-300 ${
                isYearly ? "translate-x-6" : ""
              }`}
            />
          </button>
          <span className={`font-jost text-sm transition-colors duration-300 ${isYearly ? "text-iron font-medium" : "text-taupe"}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="bg-sage text-cream-warm px-3 py-1.5 text-xs tracking-wider">
              Save up to 35%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {Object.entries(SUBSCRIPTION_TIERS).map(([key, tier]) => {
            const isCurrentPlan = currentTierKey === key;
            const isPopular = tier.popular;
            const displayPrice = isYearly ? tier.yearlyPrice : tier.monthlyPrice;

            return (
              <div
                key={key}
                className={`relative flex flex-col p-8 md:p-10 transition-all duration-300 ${
                  isPopular
                    ? "bg-slate text-cream-warm md:scale-[1.02]"
                    : "bg-cream-warm"
                } ${
                  isCurrentPlan ? "border-2 border-hydrangea-deep" : "border border-transparent"
                } hover:shadow-[0_20px_60px_rgba(61,66,72,0.1)] hover:-translate-y-1`}
              >
                {/* Badges */}
                {isPopular && !isCurrentPlan && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-hydrangea-deep text-cream-warm px-5 py-2 text-[0.65rem] tracking-[0.15em] uppercase whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                {isCurrentPlan && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage text-cream-warm px-5 py-2 text-[0.65rem] tracking-[0.15em] uppercase whitespace-nowrap">
                    Your Plan
                  </span>
                )}

                {/* Tier Name */}
                <h2 className={`font-cormorant text-3xl font-normal mb-1 ${isPopular ? "text-cream-warm" : "text-iron"}`}>
                  {tier.name}
                </h2>
                <p className={`text-sm italic mb-6 ${isPopular ? "text-stone" : "text-taupe"}`}>
                  {tier.subtitle}
                </p>

                {/* Price */}
                <div className={`mb-6 pb-6 border-b ${isPopular ? "border-white/15" : "border-stone-light"}`}>
                  <div>
                    <span className={`font-cormorant text-5xl font-light leading-none ${isPopular ? "text-cream-warm" : "text-iron"}`}>
                      ${displayPrice}
                    </span>
                    <span className={`text-sm ml-1 ${isPopular ? "text-stone" : "text-taupe"}`}>
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${isPopular ? "text-sage-light" : "text-sage"}`}>
                    {isYearly 
                      ? `Save ${tier.savingsPercent}% vs monthly`
                      : `$${tier.yearlyPrice}/year (save ${tier.savingsPercent}%)`
                    }
                  </p>
                </div>

                {/* Features */}
                <ul className="flex-1 mb-8 space-y-0">
                  {tier.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 py-2.5 text-sm leading-relaxed ${
                        isPopular 
                          ? index === 0 ? "text-cream-warm font-medium" : "text-white/85"
                          : index === 0 ? "text-iron font-medium" : "text-slate"
                      }`}
                    >
                      <Check className={`w-[18px] h-[18px] shrink-0 mt-0.5 ${isPopular ? "text-sage-light" : "text-hydrangea-deep"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                {isCurrentPlan ? (
                  <button
                    onClick={handleManageSubscription}
                    className="w-full py-4 px-6 font-jost text-sm font-normal tracking-[0.1em] uppercase border border-hydrangea-deep text-hydrangea-deep bg-transparent hover:bg-hydrangea-deep hover:text-cream-warm transition-all duration-300"
                  >
                    Manage Subscription
                  </button>
                ) : (
                  <button
                    onClick={() => handleSubscribe(key)}
                    disabled={loadingTier === key}
                    className={`w-full py-4 px-6 font-jost text-sm font-normal tracking-[0.1em] uppercase transition-all duration-300 ${
                      isPopular
                        ? "bg-cream-warm text-iron hover:bg-white"
                        : "bg-hydrangea-deep text-cream-warm hover:bg-iron"
                    }`}
                  >
                    {loadingTier === key ? "Loading..." : "Get Started"}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Guarantee Section */}
        <div className="bg-sage text-cream-warm p-10 text-center mb-12">
          <h3 className="font-cormorant text-2xl font-normal mb-3">
            14-Day Clarity Guarantee
          </h3>
          <p className="font-jost text-base opacity-90 max-w-[500px] mx-auto leading-relaxed">
            If WanderlustFin doesn't bring you more clarity and confidence in your first 14 days, 
            we'll refund your first payment. No questions asked.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-taupe text-sm">
          <p>
            Questions? Contact us at{" "}
            <a href="mailto:hello@wanderlustfin.com" className="text-hydrangea-deep hover:underline">
              hello@wanderlustfin.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
