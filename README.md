# Clean code. Domain Driven Design with Vue 3
Used: Typescript, Vue 3, Pinia

### Layers
Flow of controls:

```
                         USER
                             ↓
                        UI (Vue)     ←   Presentor
                             ↓                        ↑
(entities)        (usecases)         (State, Pinia)   
 Domain  →  Application              Data
                            ↓                         ↓ ↑
                  Adapters (Driven)  → Repository
                            ↓                          
                   Infrastructure  ←  API, etc.   
```

Dependencies:
```
                           USER
                               ↓
                          UI (Vue)      ←     Presentor
                               ↓                          ↑
(entities)          (usecases)          (State, Pinia)
 Domain    ←  Application                Data
                              ↑                           ↓
                  Adapters (Driven)  ←  Repository
                              ↑               
                   Infrastructure  ←  API, etc.      
```

## Project Setup

```sh
npm install
```

Dev mode:
```sh
npm run dev
```
Build:
```sh
npm run build
```

# Links
https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/
