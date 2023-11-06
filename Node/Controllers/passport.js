const GoogleStrategy = require('passport-google-oauth20').Strategy;

const passport = require('passport');

const GOOGLE_CLIENT_ID = "471540500950-r9sq9fn7d7b3mci0dqa9tgqikv47h5r5.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        cb(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});