const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.IsDoubleJumpEnabled,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sólido: 0},
	{solo: 0},
	{lava: 0},
	{porta: 0},
	{chave: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{CentrarEm: 0},
	{player: 0},
	{Texto: 0},
	{Texto2: 0},
	{Sprite2: 0},
	{Mouse: 0},
	{Toque: 0},
	{tempo: 0},
	{vida: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	solo: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	porta: class extends self.ISpriteInstance {},
	chave: class extends self.ISpriteInstance {},
	player: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Toque: class extends self.IInstance {}
}