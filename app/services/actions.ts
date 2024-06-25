// const apiUrl = 'https://dgxhimhvak.execute-api.us-east-1.amazonaws.com/Dev/imageGeneratorAPI?prompt=';
const testUrl = 'https://picsum.photos/id/';

export const generateImage = async (prompt: string) => {
  try {
    const response = await fetch(testUrl + prompt + '/300/300', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const url = response.url;
    return url;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
