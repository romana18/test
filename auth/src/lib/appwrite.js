import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65ee32f5606b41242b1e'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
