![Jé Delivery](./public/favicon.png)

# Jé Delivery

Jé, a irmã gêmea do Zé na área!

> O desafio: [https://github.com/.../frontend-mobile_pt.md](https://github.com/ZXVentures/ze-code-challenges/blob/master/frontend-mobile_pt.md)
>
> base: [Zé delivery](https://www.ze.delivery/)



**observações:**

- Um dos requisitos: _"Evite usar scaffolds (Create React App etc.), nós queremos ver como você cria a estrutura do projeto"_; meio que é contraditório com: _"Mantenha simples, não há necessidade de coisas extravagantes"_; se a ideia é manter simplicidade, faz todo sentido usarmos o [create-react-app](https://github.com/facebook/create-react-app), ou até mesmo [createapp.dev](https://createapp.dev/). Não vamos desperdiçar nosso _**engov**_ logo aqui.

- usei um tempo acima do esperado em procura de um _Geocoding API_ "grátis" que atendia o desejado. A primeira tentativa foi o uso do próprio _API Google Maps_. Tentei usar a _apiKey\_\_ que há em \_ze.delivery_ (imaginei q pelo menos poderia funcionar no localhost 😅), mas sem sucesso. Então tentei gerar uma chave, porém desisti por ser pago 💸.
  > [Geocoding API - Google Maps](https://console.cloud.google.com/apis/library/geocoding-backend.googleapis.com?project=tradutor-cbc&supportedpurview=project)

  Depois de muita investigação, encontrei o [MapBox](https://www.mapbox.com/), e nele "brindei" 🍻.

  > [Geocoding API - Mapbox](https://docs.mapbox.com/api/search/geocoding/)

### Visualizar no navegador 

1. instale as dependências: `npm i`; na pasta raiz do projeto
1. é necessário adicionar a _apikey_ do _[MapBox](https://docs.mapbox.com/)_. Crie um arquivo, `.env.local` e adicione:
   ```
    REACT_APP_MAPBOX_API_KEY="SUA CHAVE"
   ```
1. Execute o projeto: `npm start`
1. busque pelo endereço: Rua Américo Brasiliense, São Paulo


### Uso no desenvolvimento

**React**

- [create-react-app](https://github.com/facebook/create-react-app)
  > Sei que foi mencionado em não usar, mas também pediram simplicidade. Há algo mais simples e agradável em começar um projeto com apenas 1 comando? Sim!!! Pedir sua bebida gelada no Jé Delivery.  
- [Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [@craco/craco](https://www.npmjs.com/package/@craco/craco)
  > no momento apenas para poder usar _alias_
- [apollo graphql](https://www.apollographql.com/docs/react/get-started/)
- [react-icons](https://react-icons.github.io/react-icons)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
  - [history](https://github.com/ReactTraining/history/tree/28c89f4091ae9e1b0001341ea60c629674e83627/docs),
- [axios](https://github.com/axios/axios)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
  - redux; react-redux
  > Como o React Context API não possui algo como o useSelector do redux. Além da simplicidade e um padrão estabelecido do uso do redux, aqui está nosso amigo.

**Design**

- [photopea](photopea.com/) para editar o logo Zé para Jé

  > ótima alternativa ao Photoshop

**APIs**

- [Geocoding API - Mapbox](https://docs.mapbox.com/api/search/geocoding/)

**Petiscos, pensado em usar mais deixamos para próxima rodada:**

- styled-component
- eslint 💛
- lint-staged 💛
- husky + commitlint 💛


### Comandos relevantes

| comando | descrição |
| --- | --- |
| `npm run start` | sobe o projeto local em [localhost:3000](http://localhost:3000)
| `npm run test` | executa os testes |

## Extras
#### Bugs encontrados no Zé Delivery (web)

1. ao acessar diretamente um produto, por exemplo [Skol300ml](https://www.ze.delivery/entrega-produto/8725/skol-300ml-apenas-o-liquido), o botão voltar não funciona como desejado. Dá entender que está usando o goBack do history do navegador.

   Por que acho? Ao acessar a [página de produto](https://www.ze.delivery/produtos) e selecionar (click) o produto segurando o CTRL, na aba aberta o voltar não funciona. Ao pegar a url e colar em outra aba, o voltar é acaba sendo a página anterior da aba.

1. o _breadcrumb_ não está funcionando, pelo menos ná página do produto.
