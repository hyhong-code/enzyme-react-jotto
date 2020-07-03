import moxios from "moxios";

import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./index";

describe("getSecretWord action creator", () => {
  beforeEach(() => {
    // Tell axios to use moxios to send request
    moxios.install(); // Accepts an axios instance
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test(`adds response word to state`, async () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // Async action creator returns PROMISE ***
    await store.dispatch(getSecretWord());
    const newState = store.getState();
    expect(newState.secretWord).toBe(secretWord);
  });
});
