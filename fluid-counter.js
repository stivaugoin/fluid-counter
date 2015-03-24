FluidCounters = new Meteor.Collection('fluidCounter');

if (Meteor.isServer) {
	getNextSequence =function(collection) {
		FluidCounters.update(
			{collection: collection},
			{
				$set: {collection: collection},
				$inc: {seq: 1}
			},
			{upsert: true}
		);
		var counter = FluidCounters.findOne({collection: collection});
		return counter.seq;
	};

	setSequence = function(collection, number) {
		FluidCounters.update(
			{collection: collection},
			{$set: { seq: number }}
		);
	};
}
