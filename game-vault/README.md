# Game Vault

Projeto de catálogo de jogos com suporte a instalação, funcionamento offline e recursos de notificação em segundo plano.

## Recursos implementados

- Instalação como app no dispositivo
- Funcionamento offline com Service Worker
- Notificações locais do navegador
- Preparação para Push API e Background Sync
- Otimização de carregamento da fonte Sora via `dns-prefetch` e `preconnect`

## Observações importantes

### Notificações push

O fluxo de `pushManager.subscribe()` depende de infraestrutura do navegador e pode falhar em redes corporativas, VPNs, modos anônimo ou ambientes com bloqueadores. Esse comportamento é esperado e não significa que o restante do app esteja quebrado. A notificação local continua funcionando normalmente.

### Background Sync

O evento `sync` é disparado pelo próprio navegador quando a conexão volta. Isso pode levar alguns segundos ou até não disparar imediatamente em todos os ambientes, porque a decisão é controlada pelo navegador e não pelo código do app.

### Fonte externa

A fonte `Sora` é carregada do Google Fonts, com fallback para fontes do sistema em caso de rede indisponível. A aparência pode mudar dependendo da disponibilidade da internet, mas o layout continua legível e estável.

## Como testar

1. Rode `npm install` se necessário.
2. Execute `npm run build` para validar o build.
3. Use `npm run preview` para simular a build final.
4. Teste a permissão de notificações e o fluxo de sincronização em segundo plano em um navegador compatível.

## Aviso

Alguns recursos dependem de fatores fora do controle do código, como suporte do navegador, rede e permissões do usuário. Quando isso acontecer, o ideal é documentar a limitação e manter a experiência funcional localmente.
