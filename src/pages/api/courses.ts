import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const courses = [
    { id: 1, name: 'Next.js com Typescript' },
    { id: 2, name: 'React.js com Typescript' },
    { id: 3, name: 'Node.js com Typescript' },
    { id: 4, name: 'SASS' },
    { id: 5, name: 'Styled Components' },
  ];

  return response.json(courses);
};
