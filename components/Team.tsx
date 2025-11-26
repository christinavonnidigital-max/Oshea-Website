import React from "react";

const Team: React.FC = () => {
  return (
    <section id="team" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Team
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Leadership and key contacts.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              A focused team combining regional experience, technical expertise
              and financial oversight for accredited ISO certification,
              inspection and training.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Office: Unit RG0-002, Ground Floor, Roland Garros Building, The
              Campus, 57 Sloane Street, Bryanston, South Africa.
            </p>
          </div>
        </div>

        {/* Cards: clean, even layout */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Farayi */}
          <article className="flex h-full flex-col rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200/80">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                FC
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Farayi Chipango
                </h3>
                <p className="text-sm text-slate-600">Managing Director</p>
                <span className="mt-1 inline-flex rounded-full bg-slate-900/5 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                  Primary contact
                </span>
              </div>
            </div>

            <p className="mt-4 flex-1 text-sm text-slate-600">
              Leads overall strategy and key client relationships for
              certification, inspection and training services across the
              region.
            </p>

            <dl className="mt-4 space-y-1 text-xs text-slate-600">
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-500">Tel</dt>
                <dd>+27 10 210 7715</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-500">Cell</dt>
                <dd>+27 83 963 5544</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-500">Email</dt>
                <dd>fchipango@oshea.co.za</dd>
              </div>
            </dl>
          </article>

          {/* Isabel */}
          <article className="flex h-full flex-col rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200/80">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                IG
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Isabel Gumpo
                </h3>
                <p className="text-sm text-slate-600">Chief Financial Officer</p>
                <span className="mt-1 inline-flex rounded-full bg-slate-900/5 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                  Finance and governance
                </span>
              </div>
            </div>

            <p className="mt-4 flex-1 text-sm text-slate-600">
              Oversees financial management, governance and sustainable growth
              of certification, inspection and training activities.
            </p>

            <dl className="mt-4 space-y-1 text-xs text-slate-600">
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-500">Tel</dt>
                <dd>+27 10 210 7715</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-500">Cell</dt>
                <dd>+27 79 095 6736</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-500">Email</dt>
                <dd>igumpo@oshea.co.za</dd>
              </div>
            </dl>
          </article>

          {/* Albert */}
          <article className="flex h-full flex-col rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200/80">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                AS
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Albert Shamu
                </h3>
                <p className="text-sm text-slate-600">Certification Administrator</p>
                <span className="mt-1 inline-flex rounded-full bg-slate-900/5 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                  Client coordination
                </span>
              </div>
            </div>

            <p className="mt-4 flex-1 text-sm text-slate-600">
              Coordinates certification administration, client documentation and
              audit cycle logistics.
            </p>

            <dl className="mt-4 space-y-1 text-xs text-slate-600">
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-500">Tel</dt>
                <dd>+27 10 210 7715</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-500">Cell</dt>
                <dd>+27 63 190 5136</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-500">Email</dt>
                <dd>ashamu@oshea.co.za</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Team;