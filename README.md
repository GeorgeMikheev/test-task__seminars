# test-task__seminars
Тестовое задание: страничка с семинарами

___

## Инструкция по установке:

- Клонируйте репозиторий на свое устройство
    ```
    git clone git@github.com:GeorgeMikheev/test-task__seminars.git
    ```
- Откройте его в терминале и установите все необходимые зависимости
    ```
    npm i
    ```

- При необходимости установите `json-server`
  ```
  npm install -g json-server
  ```

- Разверните локально `json-server`
  ```
  json-server --watch seminars.json
  ```

- Создайте в коневой директории файл `.env` и добавьте туда строку
  ```
  VITE_URL='Адрес на котором развернут json-server'
  ```

- Запустите проект в режиме разработчика
  ```
  npm run dev
  ```
