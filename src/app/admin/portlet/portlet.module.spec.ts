import { PortletModule } from './portlet.module';

describe('PortletModule', () => {
  let portletModule: PortletModule;

  beforeEach(() => {
    portletModule = new PortletModule();
  });

  it('should create an instance', () => {
    expect(portletModule).toBeTruthy();
  });
});
