import { Reveal } from "@/components/ui/Reveal";

export function SeoGuide() {
  return (
    <section id="guide" className="relative px-5 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10 text-center sm:mb-14">
          <span className="text-xs font-medium uppercase tracking-wider text-accent sm:text-sm">
            Guide
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Offshore Company &amp; Payment Setup: The Complete Guide
          </h2>
          <p className="mt-4 text-sm text-muted sm:text-base">
            A practical look at why e-commerce, dropshipping, and trading
            businesses set up an offshore company with proper payment
            infrastructure — and how the process actually works.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="space-y-10 text-sm leading-relaxed text-muted sm:text-base">
            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                What Does &quot;Company &amp; Payment Setup&quot; Actually Mean?
              </h3>
              <p className="mt-3">
                A company and payment setup means forming a proper business
                entity — in Hong Kong, the US, Panama, or the UK — and
                pairing it with a business bank account, a PayPal Business
                account, and where needed, a payment provider built for
                higher transaction volume. Instead of running your store
                through a personal account or a single processor, your
                business operates through its own registered company with
                its own banking and payment infrastructure behind it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                Why E-Commerce, Dropshipping &amp; Trading Businesses Use This
              </h3>
              <p className="mt-3">
                Standard payment processors are built for low-risk,
                predictable businesses — a $49/month SaaS subscription, not a
                store doing five or six figures a month with chargebacks,
                refunds, and seasonal spikes. The moment volume grows fast,
                many processors respond with reviews, reserves, or holds on
                payouts.
              </p>
              <p className="mt-3">A proper setup addresses three recurring problems:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>
                  <strong className="text-foreground/90">Holds and freezes</strong> —
                  personal or newly opened accounts are reviewed more
                  aggressively than accounts backed by an established
                  company structure.
                </li>
                <li>
                  <strong className="text-foreground/90">Privacy</strong> — a nominee
                  director/shareholder structure keeps your personal name off
                  the public company register.
                </li>
                <li>
                  <strong className="text-foreground/90">High-risk categories</strong> —
                  many mainstream processors restrict or reject entire
                  product categories; the right payment provider is built to
                  support them.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                How the Setup Process Works
              </h3>
              <p className="mt-3">
                The process runs through four stages, in this order: company
                formation in your chosen jurisdiction, business address and
                compliance setup, opening your PayPal Business and
                multi-currency bank accounts, and finally activating a
                payment provider matched to your business type. Depending on
                the jurisdiction, most clients are fully set up and
                processing payments within 7–9 business days. Every step is
                coordinated by a single personal account manager, so you're
                not juggling separate applications with separate providers
                yourself.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                What a Hold or Freeze Actually Costs You
              </h3>
              <p className="mt-3">
                A payout hold isn&apos;t just delayed money — it&apos;s
                stalled ad spend, unpaid suppliers, and a store that can
                still take orders but can&apos;t collect for them. Compared
                to the one-time cost of a proper setup, the ongoing risk of
                running a growing business through a personal or
                easily-flagged account is usually the more expensive option
                over time, especially once you factor in the time spent
                fighting reviews and appeals instead of running the
                business.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                Who This Is a Good Fit For
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>E-commerce and dropshipping stores scaling past a few thousand euros a month</li>
                <li>Brand owners who want their personal name kept off the public record</li>
                <li>Sellers in categories that mainstream processors treat as high-risk</li>
                <li>Traders and online businesses currently dealing with holds on Shopify Payments or similar processors</li>
                <li>Anyone running a store through a personal account and looking to formalize it</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                Choosing a Jurisdiction: Hong Kong, US, Panama, or UK
              </h3>
              <p className="mt-3">
                There&apos;s no single best jurisdiction — it depends on your
                target market, your priorities around privacy and taxation,
                and which payment providers you need access to. Hong Kong is
                a common choice for e-commerce sellers targeting a global
                audience thanks to its payment provider access and
                nominee-friendly structure; the US, Panama, and UK each suit
                different combinations of market, banking, and privacy
                needs. This is exactly the kind of decision best made in a
                short conversation rather than guessed at from a table — our
                account manager will walk through your specific situation
                with you on WhatsApp.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
