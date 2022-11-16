import { ResolveUserPipe } from './resolve-user.pipe';

describe('ResolveUserPipe', () => {
  it('create an instance', () => {
    const pipe = new ResolveUserPipe();
    expect(pipe).toBeTruthy();
  });
  it('when pipe is [null] it should return "..."', () => {
    const pipe = new ResolveUserPipe();
    expect(pipe.transform(null)).toBe("...");
  });
  it('when pipe is [invitado] it should return "usted está ingresando como Invitado"', () => {
    const pipe = new ResolveUserPipe();
    expect(pipe.transform("invitado")).toBe("usted está ingresando como Invitado");
  });
  it('when pipe is [admin] it should return "admin"', () => {
    const pipe = new ResolveUserPipe();
    expect(pipe.transform("admin")).toBe("admin");
  });
});
