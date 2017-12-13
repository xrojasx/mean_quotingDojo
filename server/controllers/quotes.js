var mongoose = require('mongoose');
var Quote = mongoose.model('quotes');
module.exports = {
    show: function(req,res) {
        Quote.find({}, function(err, quotes) {
            if (err) { console.log(err); }
            res.render('quotes', { quotes: quotes });
            })
    },
    create: function(req,res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
        if (err) { 
            console.log(err); 
        }else{
        res.redirect('/quotes');
        }
    })
 }
}