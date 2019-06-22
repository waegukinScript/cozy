/**
 * GET /blog
 * Blog form page.
 */
exports.getAmenities = (req, res) => {
    //const unknownUser = !(req.user);
  
    res.render('amenities', {
      title: 'Amenities',
      //unknownUser,
    });
  };
  