import { Provider, Scope } from '@nestjs/common';

export function createTransientProider(providers: any[]): Provider[] {
  return providers.map((provider) => {
    return {
      useClass: provider,
      provide: provider,
      scope: Scope.TRANSIENT,
    };
  });
}
