import { Guid } from './creat-guid';

describe('CreatGuid', () => {
  it('should create an instance', () => {
    expect(new Guid()).toBeTruthy();
  });

  it('newGuid should  be greater than zero', () => {
    expect(Guid.newGuid().length).toBeGreaterThan(0);
  });

});
