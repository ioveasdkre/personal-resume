const runtimeConfig = {
  public: {
    // 客戶端可存取的變數
    isProduction: import.meta.env['PUBLIC_NODE_ENV'] === 'production',
    version: import.meta.env['PUBLIC_VERSION'],
    versionDate: import.meta.env['VERSION_DATE'],
  },
};

export { runtimeConfig };
