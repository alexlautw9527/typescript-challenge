/**
 * 任務：實作一個 async 函式 `fetchData`，該函式應該能夠從指定的 URL 取得資料。
 * 範例：fetchData('https://jsonplaceholder.typicode.com/todos/1') 應該回傳一個包含 id、title 等屬性的物件
 * @param url - 要取得資料的 URL
 * @returns - 回傳一個 Promise，該 Promise resolve 的值應該是從 URL 取得的資料
 */

interface Data {
  id: number;
  title: string;
}

export async function fetchData(url: string): Promise<Data> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = (await response.json()) as Data;
  return data;
}
