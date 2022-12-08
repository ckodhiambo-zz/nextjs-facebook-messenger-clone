import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: "1515037",
    key: "be3580f05b4b53803553",
    secret: "c93ec96b9acca98eb149",
    cluster: "ap2",
    useTLS: true

})

export const clientPusher = new ClientPusher('be3580f05b4b53803553', {
    cluster: 'ap2',
    forceTLS: true
});
