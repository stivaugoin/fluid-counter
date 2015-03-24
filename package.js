Package.describe({
	name: 'stivaugoin:fluid-counter',
	version: '0.0.1',
	summary: 'Counters stored in MongoDB',
	git: 'https://github.com/stivaugoin/fluid-counter.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use(['mongo-livedata']);

	api.export('getNextSequence','server');
	api.export('setSequence','server');

	api.addFiles('fluid-counter.js', ['client', 'server']);
});
