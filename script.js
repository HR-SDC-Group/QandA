import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: "30s",
};

export default function () {
  http.get(`http://localhost:3001/questions/?product_id=${Math.floor(Math.random() * (1000000 - 1 + 1)) + 1}`);
}