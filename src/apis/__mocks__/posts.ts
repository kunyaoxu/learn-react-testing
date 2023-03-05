// import * as postApi from '../posts';
// const mockPostApi =
//   jest.createMockFromModule<jest.Mocked<typeof postApi>>('../posts');

// TODO: 有空要想想這段為啥不能正常跑 @_@
// const fetchAllPosts = mockPostApi.fetchAllPosts.mockImplementation(() => {
//   return Promise.resolve({
//     data: [
//       { id: 1, title: 'title1', author: 'author1' },
//       { id: 2, title: 'title2', author: 'author2' },
//       { id: 3, title: 'title13', author: 'author3' },
//     ],
//   });
// });

const fetchAllPosts = () => {
  return Promise.resolve({
    data: [
      { id: 1, title: 'title1', author: 'author1' },
      { id: 2, title: 'title2', author: 'author2' },
      { id: 3, title: 'title13', author: 'author3' },
    ],
  });
};

export { fetchAllPosts };
