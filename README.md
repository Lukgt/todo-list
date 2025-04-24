# ToDo List

Este é um projeto de lista de tarefas desenvolvido com **React**, **TypeScript** e **Vite**. Ele permite criar, visualizar, marcar como concluídas e excluir tarefas, proporcionando uma interface simples e intuitiva.

## Funcionalidades

- Adicionar novas tarefas.
- Exibir a quantidade de tarefas criadas e concluídas.
- Marcar tarefas como concluídas.
- Excluir tarefas.
- Exibir uma mensagem quando não houver tarefas cadastradas.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida e moderna.

## Estrutura do Projeto

```plaintext
src/
├── assets/          # Imagens e ícones
├── components/      # Componentes reutilizáveis
│   ├── Header/      # Cabeçalho do aplicativo
│   ├── TaskForm/    # Formulário para adicionar tarefas
│   ├── TaskItem/    # Item individual de tarefa
│   └── TaskList/    # Lista de tarefas
├── App.tsx          # Componente principal
├── global.css       # Estilos globais
├── main.tsx         # Ponto de entrada da aplicação
```

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd todo-list
   ```

2. Instale as dependências:
   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   yarn run dev
   ```

4. Acesse o projeto no navegador:
   ```
   http://localhost:5173
   ```

## Scripts Disponíveis

- `yarn run dev`: Inicia o servidor de desenvolvimento.
- `yarn run build`: Gera a build de produção.
- `yarn run preview`: Visualiza a build de produção localmente.
- `yarn run lint`: Executa o ESLint para verificar problemas no código.

## Configuração do ESLint

O projeto utiliza o ESLint com regras específicas para React e TypeScript. Para habilitar regras mais avançadas, você pode atualizar a configuração no arquivo `eslint.config.js` conforme descrito abaixo:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.strictTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Licença

Este projeto é de uso livre e não possui uma licença específica.