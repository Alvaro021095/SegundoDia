import { MyPepiPipe } from './my-pepi.pipe';

describe('MyPepiPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPepiPipe();
    expect(pipe).toBeTruthy();
  });
});
