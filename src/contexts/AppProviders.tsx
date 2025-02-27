import React, { ReactNode, FC } from "react";
import { FiltersProvider } from "./FiltersContext";

interface IAppProvidersProps {
  children: ReactNode;
}

type TProviderComponent = FC<{ children: ReactNode }>;

const combineProviders = (
  ...providers: TProviderComponent[]
): TProviderComponent => {
  return providers.reduce<TProviderComponent>(
    (Combined, Provider) => {
      const Wrapped: FC<{ children: ReactNode }> = ({ children }) => (
        <Combined>
          <Provider>{children}</Provider>
        </Combined>
      );
      Wrapped.displayName = `Combined(${
        Provider.displayName || Provider.name
      })`;
      return Wrapped;
    },
    ({ children }) => <>{children}</>
  );
};

const CombinedProviders = combineProviders(FiltersProvider);

export const AppProviders: FC<IAppProvidersProps> = ({ children }) => {
  return <CombinedProviders>{children}</CombinedProviders>;
};
