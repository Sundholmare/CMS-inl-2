module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a695c6e801478b06cb9b662dadca7e9e'),
  },
});
