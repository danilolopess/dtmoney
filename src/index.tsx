import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  
  models: {
    transaction: Model,
  },
  
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer Website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2022-08-22 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1200,
          createAt: new Date('2022-08-14 09:00:00'),
        },
        {
          id: 3,
          title: 'Venda PC',
          type: 'deposit',
          category: 'Venda',
          amount: 4000,
          createAt: new Date('2022-08-08 09:00:00'),
        },

      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

