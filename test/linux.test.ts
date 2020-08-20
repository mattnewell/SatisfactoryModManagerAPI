import {getInstallSteamLinux} from "../src/installFinder";

test('can get install', () => {
  return getInstallSteamLinux('/home/steam-data').then(data =>
    expect(data.installs.length).toEqual(1))
});
