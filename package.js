Package.describe({
	name: 'stivaugoin:fluid-counter',
	version: '1.0.0',
	summary: 'Counters stored in MongoDB',
	git: 'https://github.com/stivaugoin/meteor-fluid-counter.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@1.0');

	api.use(['mongo-livedata']);

	api.export('getNextSequence','server');
	api.export('setSequence','server');

	api.addFiles('fluid-counter.js', ['client', 'server']);
});
