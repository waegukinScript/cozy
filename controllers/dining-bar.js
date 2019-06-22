/**
 * GET /blog
 * Blog form page.
 */
exports.getDiningBar = (req, res) => {
    //const unknownUser = !(req.user);
  
    res.render('dining-bar', {
      title: 'Dining Bar',
      //unknownUser,
    });
  };
  