Bridge.assembly("TSS.SharpedJs", function ($asm, globals) {
    "use strict";

    Bridge.define("TSS.SharpedJs.Helpers.CustomFieldInfo", {
        type: null,
        config: {
            properties: {
                Name: null
            }
        },
        getValue: function () {
            throw new System.NotImplementedException();
        }
    });

    Bridge.define("TSS.SharpedJs.Helpers.CustomReflection");

    Bridge.define("TSS.SharpedJs.Helpers.IReflected", {
        $kind: "interface"
    });
});
