import React, { useEffect } from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import type { Props } from "@theme/NotFound/Content";
import Heading from "@theme/Heading";

declare const Statsig: {
  instance: () => {
    logEvent: (eventName: string, value: string) => void;
  };
};

export default function NotFoundContent({ className }: Props): JSX.Element {
  useEffect(() => {
    try {
      Statsig.instance().logEvent("PageNotFound", window.location.href);
    } catch (error) {}
  }, []);

  // TODO(joe/ian): Remove this eventually
  if (
    typeof window !== "undefined" &&
    window.location.pathname === "/server-core/rust-core//"
  ) {
    void window.location.replace(
      "/server-core/rust-core" + window.location.search
    );
  }
  if (
    typeof window !== "undefined" &&
    window.location.pathname === "/server-core/elixir-core//"
  ) {
    void window.location.replace(
      "/server-core/elixir-core" + window.location.search
    );
  }

  return (
    <main className={clsx("container margin-vert--xl", className)}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page"
            >
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page"
            >
              We could not find what you were looking for.
            </Translate>
          </p>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page"
            >
              Please contact the owner of the site that linked you to the
              original URL and let them know their link is broken.
            </Translate>
          </p>
        </div>
      </div>
    </main>
  );
}
