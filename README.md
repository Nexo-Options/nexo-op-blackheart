# Nexo

Open source front-end for **Nexo**.

---

## 🚀 Deployment

### 1. Install dependencies

```bash
yarn install
```

### 2. Run locally

```bash
yarn start
```

The app will be served at `http://localhost:8080/` (default Vue CLI port).

---

## 🔗 Network Connections

### Local Ganache

1. Start Ganache with deterministic accounts:

   ```bash
   ganache-cli -d
   ```

2. Compile & deploy contracts.

3. Configure deployed contract addresses in:  

   ```
   ./src/artifacts/ganache.yml
   ```

4. Connect Metamask to your local network;

---

### Testnet (Rinkeby)

1. Open the dApp in your browser.  
2. Switch Metamask network to **Rinkeby Testnet**.  
3. The frontend will automatically connect to Rinkeby contracts.

---

## 📦 Scripts

- `yarn start` – start local dev server  
- `yarn build` – build production bundle  
- `yarn lint` – run linter

---

## 🛠 Prerequisites

- Node.js **v15.10** (or higher recommended)  
- Yarn package manager  
- [Metamask](https://metamask.io/) browser extension  

---

## 🤝 Contributing

1. Fork this repository  
2. Create a feature branch (`git checkout -b feature/my-feature`)  
3. Commit changes (`git commit -m "feat: add something"`)  
4. Push to branch (`git push origin feature/my-feature`)  
5. Create a Pull Request  

---

## 📄 License

MIT
