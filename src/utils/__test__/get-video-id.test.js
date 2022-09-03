import { getVideoId } from '../get-video-id';

describe('Test for getVideoId util', () => {
  test('Should get id of url', () => {
    const url = 'https://www.youtube.com/watch?v=7qRc8DmfamA';
    const id = '7qRc8DmfamA';
    expect(getVideoId(url)).toEqual(id);
  });

  test('Should response false with bad url', () => {
    const url = 'https://www.youtube.com';
    const id = false;
    expect(getVideoId(url)).toEqual(id);
  });
});
